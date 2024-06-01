import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MonacoEditorLanguageClientWrapper,
  UserConfig,
} from 'monaco-editor-wrapper';
import { helloConfig } from './configs/hello-ls.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editor')
  editorElement!: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    const wrapper = new MonacoEditorLanguageClientWrapper();

    try {
      await wrapper.dispose();
      await wrapper.initAndStart(helloConfig, this.editorElement.nativeElement);
    } catch (e) {
      console.error(e);
    }
  }
}
