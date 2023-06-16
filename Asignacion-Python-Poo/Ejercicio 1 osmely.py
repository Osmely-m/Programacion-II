import tkinter as tk

class VentanaPrincipal:
    def __init__(self, master):
        self.master = master
        master.title("Ventana Principal")

        # Crear un botón para probar la funcionalidad de la clase Ejemplo1
        self.btn_ejemplo1 = tk.Button(master, text="Probar Ejemplo1", command=self.probar_ejemplo1)
        self.btn_ejemplo1.pack(pady=10)

        # Crear un botón para probar la funcionalidad de la clase Circulo
        self.btn_circulo = tk.Button(master, text="Calcular área de un círculo", command=self.calcular_area_circulo)
        self.btn_circulo.pack(pady=10)

        # Crear un botón para probar la funcionalidad de la clase Registro y Estudiante
        self.btn_registro = tk.Button(master, text="Probar Registro y Estudiante", command=self.probar_registro_estudiante)
        self.btn_registro.pack(pady=10)

    def probar_ejemplo1(self):
        # Crear instancias de la clase Ejemplo1 y llamar a su método Datos()
        ejemplo1 = Ejemplo1('Pedro', 'Perez')
        ejemplo2 = Ejemplo1('Carlos', 'Perez', 22)
        print(ejemplo1)
        print(ejemplo2)
        ejemplo1.Datos()
        print(ejemplo1.nombre)

    def calcular_area_circulo(self):
        # Crear una instancia de la clase Circulo y calcular su área
        circulo = Circulo(5)
        area = circulo.Area()
        print(area)

    def probar_registro_estudiante(self):
        # Crear instancias de la clase Registro y Estudiante, y llamar a su método Modificar()
        persona1 = Registro('1', {'Nombre':'Yofredd'})
        print(persona1)
        persona1.Modificar({'Nombre':'Yofredd Chirino'})
        print(persona1)

        estudiante1 = Estudiante('3', {'Nombre':'Juan'})
        print(estudiante1)
        estudiante1.Modificar({'Nombre':'Juan Perez'})
        print(estudiante1)

# Crear una instancia de la clase Tk() y pasarla como parámetro al constructor de VentanaPrincipal
root = tk.Tk()
ventana_principal = VentanaPrincipal(root)
root.mainloop()