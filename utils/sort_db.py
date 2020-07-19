import json


def main():
    db = open('birthday.json')
    db_json = json.load(db)
    cards = db_json.get('cards')

    cards_sorted = sorted(cards, key=lambda c: (c[2], c[0], c[1], c[3]))

    db_sorted = dict()
    db_sorted['cards'] = cards_sorted
    out = open('birthday_sorted.json', 'w')
    json.dump(db_sorted, out)

    out.close()
    db.close()


if __name__ == '__main__':
    main()
