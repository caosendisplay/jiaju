from rest_framework import serializers
from .models import Article, Section


class SectionSerializer(serializers.ModelSerializer):
    contents = serializers.SerializerMethodField()

    class Meta:
        model = Section
        fields = ('contents', )

    def get_contents(self, obj):
        result = []
        request = self.context.get('request')
        for c in obj.contents.all():
            if c.polymorphic_ctype.model == 'picture':
                result.append({'type': 'img', 'detail': request.build_absolute_uri(c.detail.url)})
            else:
                result.append({'type': c.polymorphic_ctype.model, 'detail': c.detail})
        return result


class ArticleSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = ('sections', )
