from rest_framework import serializers
from .models import Category, Product, ProductPicture
from ..common.serializers import ArticleSerializer
from ..utils import build_absolute_uri


class ProductPictureSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='uuid')
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = ProductPicture
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
            ProductPictureSerializer(img, context=self.context).data
            for img in ProductPicture.objects.filter(product__category=obj, featured=True)]
        if not featured:
            featured = [
                ProductPictureSerializer(img, context=self.context).data
                for img in ProductPicture.objects.filter(product__category=obj)[:3]]
        return featured


class CategorySerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')

    class Meta:
        model = Category
        fields = ('id', 'title', )


class ProductSerializer(serializers.ModelSerializer):
    cover = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'cover', 'name')

    def get_cover(self, obj):
        return ProductPictureSerializer(
            obj.images.order_by('-cover', '-update_at').first(), context=self.context).data


class ProductDetailedSerializer(ProductSerializer):
    images = ProductPictureSerializer(many=True, read_only=True)
    detailed_description = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'images', 'name', 'short_description', 'detailed_description')

    def get_detailed_description(self, obj):
        if hasattr(obj, 'productdetaileddescription'):
            return ArticleSerializer(obj.productdetaileddescription.article, context=self.context).data
        else:
            return None
