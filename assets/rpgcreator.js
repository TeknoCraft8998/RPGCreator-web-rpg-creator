class RPGCreator {
  /**
   * @param {number} id
   * @param {string} name
   * @param {number} nbrOfPlayers
   */

  constructor(id, name, nbrOfPlayers) {
    this.id = id;
    this.name = name;

    this.Player = class {
      /**
       * @param {string} id
       * @param {string} name
       * @param {number} health
       * @param {number} nbrOfSlot
       */

      constructor(id, name, health, nbrOfSlot) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.nbrOfSlot = nbrOfSlot;
        this.position = [0, 0]
      }

      async setSlot() {
        let el = document.getElementById("inventory");
        el.innerHTML = "";
        for (let i = 0; i < this.nbrOfSlot; i++) {
          el.innerHTML += "<div id='slot'></div>";
          el.style.alignItems = "stretch";
          el.style.display = "flex";
          document.querySelectorAll("#slot").forEach(elslot => {
            elslot.style.height = "60px";
            elslot.style.width = "60px";
            elslot.style.border = "1px solid black"
            // elslot.style.borderRadius = "50%";
            elslot.style.backgroundColor = "grey";
          })
        }
      }

      /**
       * @param {"up" | "right" | "down" | "left"} where - Where do you want to move the element?
       * @param {number} number - How much do you want to move?
       */
      
      async move(where, number) {
        if(where === "up"){
          this.position[1] += number;
        } else if(where === "down") {
          this.position[1] -= number;
        } else if(where === "right") {
          this.position[0] += number;
        } else if(where === "left") {
          this.position[0] -= number;
        }
      }
    }
    
    this.Map = class {
      /**
       * @param {string} id - The id
       * @param {string} name - The name
       * @param {number} maxX - The max of x dimension
       * @param {number} maxY - The max of y dimension
       */
      
      constructor(id, name, maxX, maxY) {
        this.id = id;
        this.name = name;
        this.maxX = maxX;
        this.maxY = maxY;
        this.boxes = [];
      }
      
      async EnlargeMap(newMaxX, newMaxY) {
        this.maxX = newMaxX;
        this.maxY = newMaxY;

        return this;
      }
      
      async setBoxe(name, x, y) {
          this.boxes.push([name,x,y]);
          return this.boxes;
      }
    }

    if (nbrOfPlayers < 2) {
      alert("Le nombre de joueurs ne peut pas être inférieur à 2");
    }
  }
}

module.exports = RPGCreator;