

def upload_and_rename(name, filename):
    ext = filename.split('.')[-1]
    return 'images/{}.{}'.format(name, ext)
