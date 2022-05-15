window.onLoad = function() {
    console.log("YO");
    const a = character(".#####.#.....##.....#########.....##.....##.....#");
    const b = character("######.#.....##.....#######.#.....##.....#######.");
    const c = character("########......#......#......#......#......#######");
    /**
   * Learn the letters A through C.
   */ const net = new brain.NeuralNetwork();
    net.train([
        {
            input: a,
            output: {
                a: 1
            }
        },
        {
            input: b,
            output: {
                b: 1
            }
        },
        {
            input: c,
            output: {
                c: 1
            }
        }
    ], {
        log: (detail)=>console.log(detail)
    });
    /**
   * Predict the letter A, even with a pixel off.
   */ const result = brain.likely(character(".#####.#.....##.....####.####.....##.....##.....#"), net);
    console.log(result); // 'a'
};

//# sourceMappingURL=index.d25ee831.js.map
