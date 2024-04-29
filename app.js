let pron = ["the", "our"];
let adj = ["fantastic", "drunk","sleeping"];
let noun = ["fish", "mother", "alien", "horse", "squid"];
let dom = [".com", ".net"];
//bucle for
const generadorDominioFor = () =>{
    for(let p = 0; p < pron.length; p++){
        for(let a = 0; a < adj.length; a++){
            for(let n = 0; n < noun.length; n++){
                for(let d = 0; d < dom.length; d++){
                let dominio = pron[p] + adj[a] + noun[n] + dom[d];
            console.log(dominio);
            }
        }
        }
    }
};
// bucle map
 const generadorDominioMap = () =>{
pron.map((p) =>{
    adj.map((a)=>{
        noun.map((n)=>{
            dom.map((d)=>{
                let dominio = p + a + n + d;
            console.log(dominio);
            });
        });
    });
});
};
// foreach
const generadorDominioFE = () =>{
    pron.forEach((p) =>{
        adj.forEach((a)=>{
            noun.forEach((n)=>{
                dom.forEach((d)=>{
                    let dominio = p + a + n + d;
                console.log(dominio);
                });
            });
        });
    });
    };
console.log("FOR EACH");
generadorDominioFE();
console.log("MAP");
generadorDominioMap();
console.log("FOR");
generadorDominioFor();
