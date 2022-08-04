import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Line from "./Line/Line.js";
import Button3 from "./Button3/Button3.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Line: new Line({
    x: -1.29541015625,
    y: 171.8745880126953,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Button3: new Button3({
    x: 183,
    y: 170,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
