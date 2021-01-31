using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Albúm_da_copa
{
    class Program
    {
        static void Main(string[] args)
        {
            int numeroDeFigurinhas = Int32.Parse(Console.ReadLine());

            int numeroDeFigurinhasCompradas = Int32.Parse(Console.ReadLine());

            int totalDeFigurinhas = 0;



            int[] albumDeFigurinha = new int[numeroDeFigurinhas];



            // IMPLEMENTE AQUI A SOLUÇÃO

            for (int i = 0; i < numeroDeFigurinhasCompradas; i++)

            {

                try

                {

                    if ((numeroDeFigurinhas > 100) || (numeroDeFigurinhas < 1))

                    {

                        break;

                    }

                    if ((numeroDeFigurinhasCompradas > 300) || (numeroDeFigurinhasCompradas < 1))

                    {

                        break;

                    }

                    int figurinha = int.Parse(Console.ReadLine());

                    if (!albumDeFigurinha.Contains(figurinha))

                    {

                        albumDeFigurinha[i] = figurinha;

                        numeroDeFigurinhas -= 1;

                    }

                }

                catch

                {

                    break;

                }

            }

            totalDeFigurinhas = numeroDeFigurinhas;



            Console.WriteLine(totalDeFigurinhas);

        }

    }

