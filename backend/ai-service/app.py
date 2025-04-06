from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

MAX_VOLUNTEERS = 100
VOLUNTEER_WEIGHT = 0.4
REVIEW_WEIGHT = 0.6

def analyze_review_sentiment(reviews):
    if not reviews:
        return 0
    total = 0
    for review in reviews:
        polarity = TextBlob(review).sentiment.polarity  # -1 to 1
        normalized = ((polarity + 1) / 2) * 5  # Normalize to 0–5
        total += normalized
    return total / len(reviews)

@app.route('/calculate_rating', methods=['POST'])
def calculate_rating():
    data = request.json
    volunteers = data.get('volunteers', 0)
    reviews = data.get('reviews', [])

    volunteer_score = min((volunteers / MAX_VOLUNTEERS) * 5, 5)
    review_score = analyze_review_sentiment(reviews)

    final_rating = (volunteer_score * VOLUNTEER_WEIGHT) + (review_score * REVIEW_WEIGHT)
    return jsonify({ 'rating': round(final_rating, 2) })

if __name__ == '__main__':
    app.run(port=5001)
