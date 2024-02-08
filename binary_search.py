def binary_search(list, target):
    first = 0
    last = len(list) - 1 # to get last index of an array... i think

    while first <= last:
        midpoint = (first + last)//2 # Math.floor in Python, meaning if the value is 3.5, it will rounded to 3

        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
            first = midpoint + 1
        else:
            last = midpoint - 1
    return None

def verify(index):
    if index is not None:
        print('Target found at index:', index)
    else:
        print('Target not found in list')

numbers = [1,2,3,4,5,6,7,8,9,10]

result = binary_search(numbers, 12)
verify(result)

result = binary_search(numbers, 6)
verify(result)