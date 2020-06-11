import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $;
import Lity from 'lity';

@Component({
  selector: 'app-videotube',
  templateUrl: './videotube.component.html',
  styleUrls: ['./videotube.component.scss']
})
export class VideotubeComponent implements OnInit {

  listVideos: any[] = [];
  videoId: string;

  constructor(private youtube: YoutubeService) {
    this.youtube.obtenerVideos().subscribe((resp: any) => {
      console.log(resp);
      this.listVideos =  resp.items;
    });

   }

  ngOnInit(): void {
  }

  detalleVideo(detalle: string) {
    console.log(detalle);
    this.videoId = detalle;
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoId = null;
    $('#exampleModal').modal('hide');
  }

  openVideo(video: string) {
    if (video == null || video == '') {

    } else {
      Lity('https://www.youtube.com/watch?v=' + video);
    }
  }

}
