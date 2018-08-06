# Lesson04_CountingElements_MissingInteger
# https://app.codility.com/demo/results/trainingEF7TUN-XNB/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(A):
    # write your code in Python 2.7
    tagetDict = getTargetDict(A)
    for i in xrange(1, 2**31-1):
        if not i in tagetDict: return i
    return None
    
def getTargetDict(A):
    dict = {}
    for v in A:
        if not v in dict : dict[v] = 1
        else: dict[v] += 1
    return dict