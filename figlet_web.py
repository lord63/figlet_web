#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/fonts/<name>')
def get_fonts(name):
    return send_from_directory('static/fonts', name)


if __name__ == '__main__':
    app.run(debug=True)
