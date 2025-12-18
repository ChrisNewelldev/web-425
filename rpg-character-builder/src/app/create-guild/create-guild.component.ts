import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="page">
      <h2>Create Guild</h2>

      <form [formGroup]="guildForm" (ngSubmit)="onSubmit()" class="form">
        <div class="row">
          <label for="guildName">Guild Name</label>
          <input id="guildName" type="text" formControlName="guildName" />
        </div>

        <div class="row">
          <label for="description">Description</label>
          <textarea id="description" formControlName="description"></textarea>
        </div>

        <div class="row">
          <label for="type">Type</label>
          <select id="type" formControlName="type">
            <option value="" disabled>Select a type</option>
            <option value="Competitive">Competitive</option>
            <option value="Casual">Casual</option>
            <option value="Social">Social</option>
            <option value="Educational">Educational</option>
          </select>
        </div>

        <div class="row inline">
          <label>
            <input type="checkbox" formControlName="acceptTerms" />
            Accept terms
          </label>
        </div>

        <div class="row">
          <div>Notification Preference</div>
          <label>
            <input type="radio" value="Email" formControlName="notificationPreference" />
            Email
          </label>
          <label>
            <input type="radio" value="SMS" formControlName="notificationPreference" />
            SMS
          </label>
          <label>
            <input type="radio" value="In-App" formControlName="notificationPreference" />
            In-App
          </label>
        </div>

        <button type="submit" [disabled]="guildForm.invalid">Submit</button>
      </form>

      <section class="list" *ngIf="guilds.length">
        <h3>Created Guilds</h3>
        <table>
          <thead>
            <tr>
              <th>Guild Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Accept Terms</th>
              <th>Notification</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let g of guilds">
              <td>{{ g.guildName }}</td>
              <td>{{ g.description }}</td>
              <td>{{ g.type }}</td>
              <td>{{ g.acceptTerms ? 'Yes' : 'No' }}</td>
              <td>{{ g.notificationPreference }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  `,
  styles: [
    `
      .page { padding: 1rem; }
      .form { display: grid; gap: 0.75rem; max-width: 700px; }
      .row { display: grid; gap: 0.25rem; }
      .row.inline { display: flex; align-items: center; gap: 0.5rem; }
      input, textarea, select { width: 100%; max-width: 700px; }
      table { width: 100%; border-collapse: collapse; margin-top: 0.75rem; }
      th, td { border: 1px solid rgba(255,255,255,0.15); padding: 0.5rem; text-align: left; }
    `,
  ],
})
export class CreateGuildComponent {
  guilds: Array<{
    guildName: string;
    description: string;
    type: string;
    acceptTerms: boolean;
    notificationPreference: string;
  }> = [];

  guildForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      notificationPreference: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.guildForm.invalid) {
      return;
    }

    this.guilds.push(this.guildForm.value);

    this.guildForm.reset({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: '',
    });
  }
}
