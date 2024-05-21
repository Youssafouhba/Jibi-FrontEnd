import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent {
  agentForm: FormGroup;
  attachments: { file: File | null, description: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.agentForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      typePiece: ['', Validators.required],
      numPiece: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      numImmatriculation: ['', Validators.required],
      numPatente: ['', Validators.required]
    }, { validators: this.emailMatchValidator });

    this.addAttachment(); // Add the first attachment field by default
  }

  emailMatchValidator(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email === confirmEmail ? null : { emailMismatch: true };
  }

  addAttachment() {
    const index = this.attachments.length;
    this.attachments.push({ file: null, description: '' });
    this.agentForm.addControl('file' + index, new FormControl(null));
    this.agentForm.addControl('description' + index, new FormControl('', Validators.required));
  }

  removeAttachment(index: number) {
    this.attachments.splice(index, 1);
    this.agentForm.removeControl('file' + index);
    this.agentForm.removeControl('description' + index);
  }

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.attachments[index].file = file;
      this.agentForm.get('file' + index)?.setValue(file);
    }
  }

  onSubmit() {
    if (this.agentForm.invalid) {
      alert('Veuillez remplir tous les champs et télécharger les fichiers nécessaires.');
      return;
    }

    const formData = new FormData();
    formData.append('nom', this.agentForm.get('nom')?.value);
    formData.append('prenom', this.agentForm.get('prenom')?.value);
    formData.append('typePiece', this.agentForm.get('typePiece')?.value);
    formData.append('numPiece', this.agentForm.get('numPiece')?.value);
    formData.append('dateNaissance', this.agentForm.get('dateNaissance')?.value);
    formData.append('adresse', this.agentForm.get('adresse')?.value);
    formData.append('email', this.agentForm.get('email')?.value);
    formData.append('telephone', this.agentForm.get('telephone')?.value);
    formData.append('numImmatriculation', this.agentForm.get('numImmatriculation')?.value);
    formData.append('numPatente', this.agentForm.get('numPatente')?.value);

    this.attachments.forEach((attachment, index) => {
      if (attachment.file) {
        formData.append('file' + index, attachment.file);
        formData.append('description' + index, this.agentForm.get('description' + index)?.value);
      }
    });

    // Envoyer les données au serveur (à implémenter)
    // Exemple : this.http.post('url_du_serveur', formData).subscribe(...);
    console.log('Form submitted', formData);
  }
}
