* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f4f6f8;
    text-align: center;
    padding: 30px;
}

h1 {
    margin-bottom: 20px;
}

/* Filters */
.filters {
    margin-bottom: 25px;
}

.filters button {
    padding: 8px 16px;
    margin: 5px;
    border: none;
    background: #2575fc;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.filters button:hover {
    background: #1a5edc;
}

/* Gallery */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
}

.gallery img {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

/* Lightbox */
#lightbox {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#lightbox img {
    max-width: 80%;
    max-height: 80%;
    border-radius: 10px;
}

.close {
    color: white;
    font-size: 30px;
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
}

.controls {
    margin-top: 20px;
}

.controls button {
    padding: 10px 18px;
    font-size: 18px;
    border: none;
    margin: 0 10px;
    border-radius: 50%;
    cursor: pointer;
}
