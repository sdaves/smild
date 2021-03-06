import Clean from "./Clean";
import NodeWatchBuild from "./NodeWatchBuild";
import Test from "./Test";
import Typescript from "./Typescript";
import Build from "./Build";
import FrontendWatchBuild from "./FrontendWatchBuild";
import Scaffolding from "./Scaffolding";
import Coverage from "./Coverage";
import ModuleWatchBuild from "./ModuleWatchBuild";
const gulp = require("gulp4");

export const frontend = {
    "clean": Clean,
    "build": gulp.series(Clean, Build),
    "watch-build": FrontendWatchBuild,
    "test": Test,
    "coverage": Coverage,
    "new": Scaffolding
};

export const module = {
    "clean": Clean,
    "build": Typescript,
    "watch-build": ModuleWatchBuild,
    "test": Test,
    "coverage": Coverage,
    "new": Scaffolding
};

export const nodejs = {
    "clean": Clean,
    "build": Typescript,
    "watch-build": NodeWatchBuild,
    "test": Test,
    "coverage": Coverage,
    "new": Scaffolding
};
