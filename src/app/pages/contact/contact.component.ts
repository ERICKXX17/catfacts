import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true, // Agregado para soportar imports en el decorador
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactoComponent {
  // Propiedades para almacenar los datos enviados
  nombreCliente = '';
  emailCliente = '';
  mensajeCliente = '';
  statusCliente = '';
  municipioCliente = '';
  autorizacionCliente = false;
  enviar = false;

  // Definición del formulario reactivo
  formContacto = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    status: new FormControl('', [
      Validators.required
    ]),
    municipio: new FormControl('', [
      Validators.required
    ]),
    mensaje: new FormControl('', [
      Validators.required,
      Validators.maxLength(200)
    ]),
    autorizacion: new FormControl(false)
  });

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    this.enviar = true;
    if (this.formContacto.valid) {
      this.nombreCliente = this.formContacto.value.nombre!;
      this.emailCliente = this.formContacto.value.email!;
      this.mensajeCliente = this.formContacto.value.mensaje!;
      this.statusCliente = this.formContacto.value.status!;
      this.municipioCliente = this.formContacto.value.municipio!;
      this.autorizacionCliente = this.formContacto.value.autorizacion!;
    }
  }
}
