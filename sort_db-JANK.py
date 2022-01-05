import json


def main():
    cnt = 0
    deletedList = list()
    db = open('jank.json')
    db_json = json.load(db)
    cards = db_json.get('cards')

    cards_sorted = sorted(cards, key=lambda c: (c[0], c[1], c[2]))
    #cards_sorted = sorted(cards, key=lambda c: (c[0], c[1], c[2], c[3], c[4], c[5]))

    # for key in list(cards_sorted):
    #     cnt+=1
    #     #print('List is size {} cards'.format(len(cards_sorted)))
    #     #print('count is {} cards'.format(cnt))
    #     #if key[0] == '+2 Mace':
    #     #        print('I GOT HERE')
    #     #print('Read {} cards'.format(cnt))
    #     if cnt < len(cards_sorted):
    #         if cnt > 23718:
    #             print('Count is {} Compare {} to {}'.format(cnt, cards_sorted[cnt][0], cards_sorted[cnt-1][0]))
    #         if cnt > 1 and cards_sorted[cnt][0] == cards_sorted[cnt-1][0]:
    #             if cnt > 23718:
    #                 print('Deleting {}'.format(cards_sorted[cnt-1][0]))
    #             #print(cards_sorted[cnt-1][0])
    #             del cards_sorted[cnt-1]

    # for idx, val in enumerate(cards_sorted):
    #     #cnt+=1
    #     #print('List is size {} cards'.format(len(cards_sorted)))
    #     #print('count is {} cards'.format(cnt))
    #     #if key[0] == '+2 Mace':
    #     #        print('I GOT HERE')
    #     #print('Read {} cards'.format(cnt))
    #     if idx < len(cards_sorted):
    #         if idx > 23718:
    #             print('Count is {} Compare {} to {}'.format(idx, cards_sorted[idx][0], cards_sorted[idx-1][0]))
    #         if idx > 1 and cards_sorted[idx][0] == cards_sorted[idx-1][0]:
    #             if idx > 23718:
    #                 print('Deleting {}'.format(cards_sorted[idx-1][0]))
    #             #print(cards_sorted[cnt-1][0])
    #             cards_sorted[idx-1] = 'DELETETHIS'

    for idx, val in enumerate(cards_sorted):
        if idx < len(cards_sorted):
            if idx > 0 and cards_sorted[idx][0] == cards_sorted[idx-1][0]:
                if int(cards_sorted[idx-1][1]) < int(cards_sorted[idx][1]):
                    cards_sorted[idx][1] = cards_sorted[idx-1][1]
                if float(cards_sorted[idx-1][2]) < float(cards_sorted[idx][2]):
                    cards_sorted[idx][2] = cards_sorted[idx-1][2]
                #print(cards_sorted[cnt-1][0])
                #delete the duplicate previous card

                #cards_sorted[idx-1][0] = cards_sorted[idx-1][0] + '-DELETETHIS'
                
                #if idx > 23718:
                    #print('Flagging {}'.format(cards_sorted[idx-1][0]))
            
    for idx, val in enumerate(cards_sorted):
        #price caps by rarity, ugly implementatin
        match int(cards_sorted[idx][1]):
            case 3:
                if float(cards_sorted[idx][2]) > 2.25:
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
            case 2:
                if float(cards_sorted[idx][2]) > 1.50:
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
            case 1:
                if float(cards_sorted[idx][2]) > 0.75:
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
            case 0:
                if float(cards_sorted[idx][2]) > 0.25:
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
                    deletedList.append(cards_sorted[idx].pop())
            case _: continue

    for idx, val in enumerate(cards_sorted):
        if idx < len(cards_sorted):
            if idx > 0 and cards_sorted[idx] != [] and cards_sorted[idx-1] != []:
                if idx > 0 and cards_sorted[idx][0] == cards_sorted[idx-1][0]:
                    deletedList.append(cards_sorted[idx-1].pop())
                    deletedList.append(cards_sorted[idx-1].pop())
                    deletedList.append(cards_sorted[idx-1].pop())

    db_sorted = dict()
    db_sorted['cards'] = cards_sorted
    out = open('jank_sorted.json', 'w')
    json.dump(db_sorted, out)

    out.close()
    db.close()


if __name__ == '__main__':
    main()
