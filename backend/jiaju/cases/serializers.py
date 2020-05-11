from rest_framework import serializers
from .models import Category, Case, CasePicture
from ..common.serializers import ArticleSerializer
from ..utils import build_absolute_uri


class CasePictureSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='uuid')
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = CasePicture
        fields = ('id', 'image_url',)

    def get_image_url(self, obj):
        request = self.context.get('request')
        return build_absolute_uri(request, obj.image.url)


class FeaturedCategorySerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')
    images = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'title', 'images')

    def get_images(self, obj):
        featured = [
            CasePictureSerializer(img, context=self.context).data
            for img in CasePicture.objects.filter(case__category=obj, featured=True)]
        if not featured:
            featured = [
                CasePictureSerializer(img, context=self.context).data
                for img in CasePicture.objects.filter(case__category=obj)[:3]]
        return featured


class CategorySerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')

    class Meta:
        model = Category
        fields = ('id', 'title', )


class CaseSerializer(serializers.ModelSerializer):
    cover = serializers.SerializerMethodField()

    class Meta:
        model = Case
        fields = ('id', 'cover', 'name')

    def get_cover(self, obj):
        return CasePictureSerializer(
            obj.images.order_by('-cover', '-update_at').first(), context=self.context).data


class CaseDetailedSerializer(CaseSerializer):
    images = CasePictureSerializer(many=True, read_only=True)
    detailed_description = serializers.SerializerMethodField()

    class Meta:
        model = Case
        fields = ('id', 'images', 'name', 'short_description', 'detailed_description')

    def get_detailed_description(self, obj):
        if hasattr(obj, 'casedetaileddescription'):
            return ArticleSerializer(obj.casedetaileddescription.article, context=self.context).data
        else:
            return None
