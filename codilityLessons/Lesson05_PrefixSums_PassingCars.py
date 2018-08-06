# Lesson05_PrefixSums_PassingCars
# https://app.codility.com/demo/results/trainingNHEHDU-4JS/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"
def getPrefix(A):
  # write your code in Python 2.7
  res = []
  sum = 0
  for i in xrange(len(A)):
      sum += A[i]
      res.append(sum)
  return res

def countTotal(F, l, r):
  if l == 0: return F[r]
  else: return F[r] - F[l-1]
    
def solution(A):
  F = getPrefix(A)
  res = 0
  n = len(F)
  for i in xrange(n):
    if A[i] == 0:
      res += countTotal(F, i, n-1)
    if res > 1000000000: return -1
  return res