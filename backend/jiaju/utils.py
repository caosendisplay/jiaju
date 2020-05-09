def build_absolute_uri(request, path):
    if request.META['REMOTE_ADDR'] == '127.0.0.1':
        return request.build_absolute_uri(path)
    return request.build_absolute_uri(path).replace('http', 'https')


def upload_and_rename(name, filename):
    ext = filename.split('.')[-1]
    return 'images/{}.{}'.format(name, ext)
