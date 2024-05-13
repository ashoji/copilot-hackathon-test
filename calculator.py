# q: 二つの数字を入力して、たし算、ひき算、かけ算、わり算を行うプログラムを作成してください
# a:
# 1. 二つの数字を入力する
# 2. たし算、ひき算、かけ算、わり算を行う関数を作成する
# 3. たし算、ひき算、かけ算、わり算を行う関数を呼び出す
# 4. 結果を表示する
# 5. プログラムを終了する

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Can't divide by zero"
    return a / b

def main():
    try:
        a = int(input("Enter the first number: "))
        b = int(input("Enter the second number: "))
    except ValueError:
        print("Invalid input. Please enter valid integers.")
        exit(1)

    print(f"Sum of the numbers: {add(a, b)}")
    print(f"Difference of the numbers: {subtract(a, b)}")
    print(f"Product of the numbers: {multiply(a, b)}")
    print(f"Quotient of the numbers: {divide(a, b)}")

if __name__ == "__main__":
    main()
    


