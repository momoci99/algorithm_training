# Lesson03_TimeComplexity_FrogJmp
# https://app.codility.com/demo/results/trainingG83VZK-MHF/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(X, Y, D):
    # write your code in Python 2.7
    dist = Y-X
    if dist<0: 
        return 0
    else :
        v, r = divmod(dist, D)
        return v + (r>0 if 1 else 0)