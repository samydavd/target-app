<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('usuarios');
        Schema::create('usuarios', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->string('apellidos')->nullable();
            $table->string('rut', 15)->nullable()->comment('Número de documento de identidad sin puntos con guión');
            $table->string('email')->unique();
            $table->string('password', 80)->comment('Contraseña de usuario');
            $table->timestamp('email_verified_at')->nullable()->comment('Fecha hora de verificación de correo');
            $table->string('telefono', 20)->nullable()->comment('Telefono de contacto');
            $table->boolean('activo')->default(1);
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
