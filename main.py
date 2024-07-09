import webview
from os.path import abspath, dirname

programPath = abspath(dirname(__file__))

def create():
    webview.create_window("SSS-GUI v1.2.0 24w26a", f"{programPath}/pages/index.html", width=1500, height=800)

if __name__ == "__main__":
    create()
    webview.start()