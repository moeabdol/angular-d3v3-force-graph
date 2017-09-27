import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('d3.js version:', d3['version']);

    this.forceGraph();
  }

  forceGraph() {
    // const width = 960;
    // const height = 500;
    // const showNames = false;
    // let root, nodes, links;
    //
    // const force = d3.layout.force()
    //   .linkDistance(80)
    //   .charge(-120)
    //   .gravity(.05)
    //   .size([width, height])
    //   .on('tick', tick);
    //
    // const svg = d3.select('body').append('svg')
    //   .attr('width', width)
    //   .attr('height', height);
    //
    // let link = svg.selectAll('.link');
    // let node = svg.selectAll('node');
    //
    // d3.json('assets/demo.json', (err, json) => {
    //   root = json;
    //   start();
    // });
    //
    // function start() {
    //   nodes = flatten(root);
    //   links = d3.layout.tree().links(nodes);
    //   for (let i = 0; i < nodes.length; i++) {
    //     if (nodes[i].collapse) {
    //       toggle(nodes[i]);
    //     }
    //   }
    //   restart();
    // }
    //
    // function restart() {
    //   nodes = flatten(root);
    //   links = d3.layout.tree().links(nodes);
    //   update();
    // }
    //
    // function update() {
    //   force
    //     .nodes(nodes)
    //     .links(links)
    //     .start();
    //
    //   link = link.data<any>(links, (d) => d.target.id);
    //   link.exit().remove();
    //   link.enter().insert('line', '.node')
    //     .attr('class', 'link');
    // }
    //
    // function tick() {
    // }
    //
    // function flatten(r) {
    // }
    //
    // function toggle(n) {
    // }
  }
}
