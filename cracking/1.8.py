#1.8 한 단어가 다른 단어에 포함된 문자열인지 판별하는 isSubString이라는 메서드가 있다고 하자. 
#s1과 s2의 두 문자열이 주어졌을때, s2가 s1을 회전시킨 결과인지 판별하는 코드를 isSubstring을 한번만 호출하도록 하여 작성하라.
#(가령 'waterbottle'은 'erbottlewat'을 회전시켜 얻을 수 있는 문자열이다)
def solution(s1, s2):
    sortedS1 = ''.join(sorted(s1))
    sortedS2 = ''.join(sorted(s2))
    return sortedS1 in sortedS2

def solution2(s1, s2):
    pass

res = solution('waterbottle', 'erbottlewat')
print(res)