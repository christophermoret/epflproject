import flask
app = flask.Flask("game")

# Program to display a web page:
def get_html(page_name):
    html_file = open("static/templates/" + page_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

# DATA:
# Create creatures:
class creature:
    def __init__(self, name, hp, atk):
        self.name = name
        self.hp = hp
        self.atk = atk

warrior = creature("Link", 100, 50)
magician = creature("Merlin", 80, 60)
monster1 = creature("Guardian of the door", 60, 20)

# Assigne data



# Routes ----------------------------------

# Homepage
@app.route("/")
def home():
    return get_html("index")

# Choose hero
@app.route("/hero")
def chooseHero():
    return get_html("hero")

# Game
@app.route("/game")
def game():
    return get_html("game")

# Fight
@app.route("/lvl1")
def fight():
    return get_html("game")