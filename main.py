from typing import List

def add_numbers(*args: float) -> float:
    return sum(args)

def sort_list(unsorted_list: List[float]) -> List[float]:
    return sorted(unsorted_list)

if __name__ == "__main__":
    print(add_numbers(2, 3, 4.5))
    print(sort_list([2, 3, 5.2, 1]))