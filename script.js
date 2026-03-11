document.addEventListener('DOMContentLoaded', () => {
    const tower = document.getElementById('tower');
    const playBtn = document.getElementById('play-btn');
    const promptDisplay = document.getElementById('prompt-display');
    const taskElement = document.getElementById('task');

    // Romantic prompts
    const prompts = [
        "Kiss your partner passionately for 30 seconds.",
        "Whisper something romantic in your partner's ear.",
        "Give your partner a sensual massage for 5 minutes.",
        "Dance slowly and intimately with your partner.",
        "Share a romantic memory from your relationship.",
        "Hold hands and gaze into each other's eyes for 1 minute.",
        "Feed your partner a piece of chocolate sensually.",
        "Write a love note on your partner's skin with your finger.",
        "Recreate your first date moment.",
        "Tell your partner three things you love about them.",
        "Cuddle and listen to each other's heartbeat.",
        "Share a secret dream you have for your future together.",
        "Give your partner a gentle, loving backrub.",
        "Whisper sweet nothings to make your partner smile.",
        "Hold each other close and sway to imaginary music."
    ];

    // Create initial tower with blocks
    let blockCount = 10;
    let currentHeight = 0;
    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.bottom = `${currentHeight}px`;
        tower.appendChild(block);
        currentHeight += 20;
    }

    playBtn.addEventListener('click', () => {
        if (blockCount <= 1) {
            alert("The tower has fallen! But your love stands strong. 💕");
            return;
        }

        // Disable button during animation
        playBtn.disabled = true;

        // Get the bottom block
        const blocks = tower.querySelectorAll('.block');
        const bottomBlock = blocks[0]; // First one is bottom

        // Animate removing from bottom
        bottomBlock.style.transform = 'translateX(-150px)';

        setTimeout(() => {
            // Remove the bottom block
            tower.removeChild(bottomBlock);
            blockCount--;

            // Create new block on top
            const newBlock = document.createElement('div');
            newBlock.classList.add('block');
            newBlock.style.bottom = `${currentHeight}px`;
            newBlock.style.transform = 'translateY(-50px)'; // Start above
            tower.appendChild(newBlock);

            // Animate placing on top
            setTimeout(() => {
                newBlock.style.transform = 'translateY(0)';
                currentHeight += 20;

                // After animation, show prompt
                setTimeout(() => {
                    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
                    taskElement.textContent = randomPrompt;
                    promptDisplay.style.display = 'block';

                    // Re-enable button
                    playBtn.disabled = false;
                }, 500);
            }, 100);
        }, 1000);
    });
});