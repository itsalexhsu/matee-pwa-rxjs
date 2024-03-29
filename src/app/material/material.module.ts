import { NgModule } from '@angular/core';

// Materials Modules
import {
  MatDialogModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatInputModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTabsModule,
  MatCheckboxModule,
  MatBadgeModule,
 } from '@angular/material';

  @NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatBadgeModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatBadgeModule,
  ],
})
export class MaterialModule {}