// Simple Random Number Generator in JavaScript

function simpleRandomGenerator() {
    console.log("=== Simple Random Number Generator ===\n");
    
    // Generate a random float between 0.0 and 1.0
    console.log(`Random float (0.0 to 1.0): ${Math.random()}`);
    
    // Generate a random integer between 1 and 100
    console.log(`Random integer (1 to 100): ${Math.floor(Math.random() * 100) + 1}`);
    
    // Generate a random float between 0 and 10
    console.log(`Random float (0 to 10): ${(Math.random() * 10).toFixed(2)}`);
    
    // Generate a random choice from an array
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(`Random color: ${randomColor}`);
    
    // Generate multiple random numbers
    console.log("\n--- Multiple Random Numbers ---");
    for (let i = 0; i < 5; i++) {
        console.log(`Random number ${i + 1}: ${Math.floor(Math.random() * 50) + 1}`);
    }
}

function customRangeGenerator(min, max, count = 1) {
    console.log(`\n=== Custom Range Generator (${min} to ${max}) ===`);
    
    if (count === 1) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return results;
    }
}

// Utility functions for different random number types
const RandomGenerator = {
    // Random integer between min and max (inclusive)
    randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    
    // Random float between min and max
    randomFloat: (min, max) => Math.random() * (max - min) + min,
    
    // Random boolean
    randomBoolean: () => Math.random() >= 0.5,
    
    // Random element from array
    randomChoice: (array) => array[Math.floor(Math.random() * array.length)],
    
    // Shuffle array
    shuffle: (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
};

// Run examples
if (typeof window === 'undefined') {
    // Node.js environment
    simpleRandomGenerator();
    console.log(`Custom range example: ${customRangeGenerator(10, 20, 3)}`);
    
    console.log("\n=== Usage Examples ===");
    console.log("1. Math.random() - Random float between 0.0 and 1.0");
    console.log("2. RandomGenerator.randomInt(a, b) - Random integer between a and b");
    console.log("3. RandomGenerator.randomFloat(a, b) - Random float between a and b");
    console.log("4. RandomGenerator.randomChoice(array) - Random element from array");
    console.log("5. RandomGenerator.shuffle(array) - Shuffle an array");
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { simpleRandomGenerator, customRangeGenerator, RandomGenerator };
}