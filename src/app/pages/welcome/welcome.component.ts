import { Component, inject, signal } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export default class WelcomeComponent {

  public pages: string[] = ['page1', 'page2', 'page3', 'page4'];

  public currentPage = signal(0);

  #navController = inject(NavController);

  public next(): void {
    this.currentPage.set(this.currentPage() + 1);
    const page = this.pages[this.currentPage() % this.pages.length];
    this.#navController.navigateForward([`/welcome/${page}`]);
  }

}
