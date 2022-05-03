const dataDirectory = [
    {
        puesto:'Presidente',
        nombre:'Gral.Brig.D.E.M.Mtro. Rogelio Jiménez Hidalgo',
        ima:'rogelio_jimenez_hidalgo.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Vicepresidente',
        nombre:'Coronel y Lic. Reveriano García Castrejón',
        ima:'reveriano_garcia_castrejon.jpg',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Vicepresidente',
        nombre:'Contralmirante R. y Lic. Américo Flores Nava',
        ima:'americo_flores_nava.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretario General',
        nombre:'Lic. José Felipe Cázares Osorio',
        ima:'jose_cazares_osorio.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretario de Organización',
        nombre:'Coronel de Inf. D.E.M. Desiderio Aguilar Dorantes',
        ima:'desiderio_aguilar_dorantes.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretario Jurídico',
        nombre:'General de Brigada y Lic. Rubén Palacios Vargas',
        ima:'ruben_palacios_vargas.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretario de Acción Política',
        nombre:'Lic.Jose Acevedo Ortiz',
        ima:'jose_acevedo_ortiz.jpeg',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Coordinador de Sectores',
        nombre:'Lic. Ubaldo Aguilar Menéndez',
        ima:'ubaldo_aguilar_menendez.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretario de Finanzas',
        nombre:'M.V.Z. Armando de la Cruz Uribe Valle',
        ima:'armando_uribe_valle.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretario de Administración',
        nombre:'Teniente Coronel Julio Cuapio Cortes',
        ima:'julio_cuapio_cortes.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretario de Acción Social',
        nombre:'M.V.Z.Manuel Acosta Calderón',
        ima:'manuel_acosta_calderon.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Sria. de Comunicación Social',
        nombre:'Lic. Lina Caritina Rios Gonzalez',
        ima:'lina_rios_gonzalez.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Srio. de Acción Electoral',
        nombre:'Lic. Luis Alberto May López',
        ima:'luis_may_lopez.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Srio. de Relaciones Internacionales',
        nombre:'Lic Julio César Alvarado García',
        ima:'julio_alvarado_garcia.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Srio. de Acción Juvenil',
        nombre:'Lic. Israel Montano Romero',
        ima:'israel_montano_romero.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    },{
        puesto:'Secretaria de Acción Femenil',
        nombre:'Lic.Luz Margarita Chávez García',
        ima:'luz_chavez_garcia.png',
        semblanza:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla magna. Nunc porttitor ex vitae mattis interdum. Curabitur congue, libero at tempor malesuada, metus urna mattis dolor, ac accumsan augue erat sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper augue metus, sed faucibus erat gravida at. Curabitur finibus tortor sem, eu vestibulum sem pharetra nec. Integer eget interdum ipsum, id auctor mi. Integer rutrum egestas semper. Quisque eget dui leo.',
    }
];

export default dataDirectory;