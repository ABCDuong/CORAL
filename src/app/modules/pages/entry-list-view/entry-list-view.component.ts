import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntriesService } from '@core/http/entries.service';

@Component({
  selector: 'app-modify-entries',
  templateUrl: './entry-list-view.component.html',
  styleUrls: ['./entry-list-view.component.scss']
})
export class EntryListViewComponent implements OnInit {

  entrySamples: any;

  constructor(
    private entryService: EntriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries() {
    this.entryService.getEntries().subscribe((data) => {
      this.entrySamples = Object.keys(data['entries']).map((key) => {
        data['entries'][key].uid = key;

        return data['entries'][key]
      });

      console.log('T1: ', this.entrySamples);
    });
  }

  createEntry() {
    this.entryService.setEntry().subscribe((data) => {
    });;
  }

  editEntry(entryKeyId: string) {
    this.router.navigate(['./modify-entry', entryKeyId]);
  }

}
