import tensorflow as tf
import numpy as np

# Example user preference data (this would be dynamic in a real-world app)
user_data = np.array([[0, 1, 0, 1, 1]])  # A simple one-hot encoded user preference

# Example property data
property_data = np.array([
    [1, 0, 1, 0, 0],  # Property 1
    [0, 1, 0, 1, 1],  # Property 2
    [1, 1, 1, 0, 0],  # Property 3
])

# Simple recommendation model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(5, input_shape=(5,), activation='relu'),
    tf.keras.layers.Dense(3, activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy')

# Simulated training (in reality, you'd train on historical data)
model.fit(user_data, property_data, epochs=5)

# Predict recommendations
recommendations = model.predict(user_data)
print("Recommended Properties:", recommendations)
