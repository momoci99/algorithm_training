#1.7 MxN 행렬의 한 원소가 0일 경우, 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정하는 알고리즘을 작성하라.
def solution(mat):
    if mat == None: 
        return mat
    
    addr = None
    m, n = len(mat), len(mat[0])
    for x in range(m):
        for y in range(n):
            if mat[x][y] == 0:
                if addr != None: return mat
                else: addr = (x, y)
    
    if addr == None:
        return mat
    else:
        mat[addr[0]] = [0] * n
        for x in range(m):
            mat[x][addr[1]] = 0
    return mat

res = solution(None)
print(res)