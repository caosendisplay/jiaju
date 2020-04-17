

def upload_and_rename(instance, filename):
    ext = filename.split('.')[-1]
    return 'images/{}.{}'.format(instance.pk, ext)
