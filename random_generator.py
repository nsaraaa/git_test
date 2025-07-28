import random
import time

def simple_random_generator():
    """Simple random number generator with various options"""
    
    print("=== Simple Random Number Generator ===\n")
    
    # Generate a random float between 0.0 and 1.0
    print(f"Random float (0.0 to 1.0): {random.random()}")
    
    # Generate a random integer between 1 and 100
    print(f"Random integer (1 to 100): {random.randint(1, 100)}")
    
    # Generate a random float between 0 and 10
    print(f"Random float (0 to 10): {random.uniform(0, 10):.2f}")
    
    # Generate a random choice from a list
    colors = ['red', 'blue', 'green', 'yellow', 'purple']
    print(f"Random color: {random.choice(colors)}")
    
    # Generate multiple random numbers
    print("\n--- Multiple Random Numbers ---")
    for i in range(5):
        print(f"Random number {i+1}: {random.randint(1, 50)}")
    
    # Generate random numbers with seed for reproducibility
    print("\n--- Random Numbers with Seed ---")
    random.seed(42)  # Set seed for reproducible results
    print(f"With seed 42: {random.randint(1, 100)}")
    print(f"With seed 42: {random.randint(1, 100)}")
    
    # Reset seed to current time for true randomness
    random.seed(time.time())
    print(f"With time seed: {random.randint(1, 100)}")

def custom_range_generator(min_val, max_val, count=1):
    """Generate random numbers within a custom range"""
    print(f"\n=== Custom Range Generator ({min_val} to {max_val}) ===")
    
    if count == 1:
        return random.randint(min_val, max_val)
    else:
        return [random.randint(min_val, max_val) for _ in range(count)]

if __name__ == "__main__":
    # Run the simple generator
    simple_random_generator()
    
    # Example of custom range generator
    print(f"\nCustom range example: {custom_range_generator(10, 20, 3)}")
    
    print("\n=== Usage Examples ===")
    print("1. random.random() - Random float between 0.0 and 1.0")
    print("2. random.randint(a, b) - Random integer between a and b (inclusive)")
    print("3. random.uniform(a, b) - Random float between a and b")
    print("4. random.choice(sequence) - Random element from a sequence")
    print("5. random.seed(value) - Set seed for reproducible results")