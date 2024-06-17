from app import db

class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    albums = db.relationship('Album', backref='artist', lazy='dynamic')

    def __repr__(self):
        return f'<Artist {self.name}>'

class Album(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    cover_url = db.Column(db.String(200))
    release_year = db.Column(db.Integer)
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'), nullable=False)
    songs = db.relationship('Song', backref='album', lazy='dynamic')

    def __repr__(self):
        return f'<Album {self.title}>'

class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    audio_url = db.Column(db.String(200), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey('album.id'), nullable=False)
    featured_artists = db.Column(db.String(200))
    producers = db.Column(db.String(200))

    def __repr__(self):
        return f'<Song {self.title}>'