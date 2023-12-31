import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {/* <Logo /> */}
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEq0lEQVR4nO2ZW2wUVRjHx3s00QeNb/hibNGCGG8YNd4JMfiEl/CADxpTFC9RjGKMCaG0UGgaUBsT7WqLkcZYgYqlCgQabQtNcVEklraWxmJtLezunP93zogXAp85221Pl522Z2Z3gYd+yUl2Z87M+f++yzlnZhxn2qbt/LDBwcErAMwD8BaAGiLaCaBVt9TvGn1OCPEIM1/unA/GzBcLIR4HsA3AP0TENk33BfCVlHIhM190LoRfKKV8joj6bEVP0nqJ6Fl9z7MiXil1MxF15ED4mVFpV0rNyqt4IUQxgBO5Fk+m/aWjkRfxugDzKJzPaGuZ+YJciq+wGhhg1VbL6tNnWNU9z/JgUzYQ5TkRT0Sv2g6qvl7B3sob0ppsr8umLl7K1vNzAfxrNeDxAfZKCjMA1IYHsgH4j4juDiWemS8F0G09YF80Q3yyld7EBJENRA8zXxbG++8EGsyNsVd+WyZA5Kmsi1pKuTyQ+Hg8fhURuYEHizawVzbbiK+4i2VfNGsAIkrEYrErrQGI6PXQ3hroSs5EyeI99nsuxHOqvRYkfQ6FHki4LI/8wGrvRlab32BVcSer6idZ9uzLFuCglXgpZVFo73e3sVcy07+Y9Yz0wQKWrZ8wxYbCQsy08f4rYQFU7eIJxaeBlM0eAaFg9wfw4pQARFQXCmC4n71VE3vf+3gRe6tuNP9LCll2NgcF+MwG4ECo9GmJTO713e8xDR5h+W25Obb+vqDptN8mhY6HAdDz/ahnfQE2FZtUq19mjtcvCxKBYRuAvwMD/PbzmHAVWeQPUHmv6R8bYrX+frNfim61BThhA3AykPiuFvYq5qZt3ry1t/tC0FCfue7wd2Mzlqq8xxbgpE0NwDrvO75gr2yW8XLNYiaRYFX7tC+A/Kkx7Xq1s3LkuuonbB3m2gD0WonfU8XeygIjbvObSfHJc01r/NOobknmvY7+klz8LCPQY5NC31gV7Wja6OlwT1W6ZzcV+89GGx4MPDlQOkCjTQTWWEWgJcLqo4UZaaH/j0VGL1jRBlafLzV1kN3mrswmAvPDDiD/6BlXwAUsf9yWgtpuUq1pdWgAIcTDUwLot2ZBCjktdcYVr9xeas6JxBhYcvECwgAI6wcbAJEwAPrpa2TT9lhGYcoty00adbWEAfjQsTXXdW8BcDrQAPE/zWzzpc/q2tk8blVeErR4T7uuO8caIBWFxkD5P9BtBDaWZPaBYO/9eaZPa00QgK1OUCOigiAvbOWv7ekbN78++sF/9JGztIhlb4eNeK2hMDBAKgorrAEO7TAAezdO3O/7arMuvPsQU2xwKoC3nbCmX30TUbMVwP56MwMdaJi0r6p7wfTdsW6yvruyfmtNRNcAODwlgE6P0iL2Vs9JrgeT9o8NsVc1fwSgzT9aADoBXO3kwhKJxHV6HzJlJPRuc7jfrjgTxyYEBdAVj8dnOLk0KeW1APbZ1kTYBqBNR93JhzHzJQAqAZzKg/BTANbpz1ZOvk2/9M3lVxoA7QDucM62EdECItodJiKpa3YBeNQ515Yq8pf1iklER/22Ialj/QC26Pf+OS/SPHwzvl4Icatu+rc+ltNBpm3aps3R9j+bs4TW8+Qn9gAAAABJRU5ErkJggg=="></img> */}
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE8UlEQVR4nO1Za2xURRS+5WmJGoPiD9+SiEYDxsQX6h/QEGPii5+YYIjxD0okJErURAqtUqC2QjSplGyMbY19UNouLXb7SEuXNi0FKrSlz/S1K213997v3I34IHDMrNu7W3a7nXt3F/jRk5zs7ty5c75vzpw5Z2YVZV7m5dYQt9u9DMBrAHYCsBFRDYBmocHvNvFM07RXmTlVuRWEmRdpmrYRQAWAv4mIZVT0BVCu6/q7zLzwZgBfoOv6B0Q0JAs6hg4Q0RYx5g0B7/f7VxNRWwKAX++VVr/f/1RSwWua9iGAy4kGTyH9U3gjKeBFACYROF+nmcyckkjw++WWAbHzYDf/tKGBC95u5M6SwXhI7E0IeCL6RNZoxdY23qUUzdDW3J544uKjeGf+eQD/yBibHPVy2oLiCALZj1TGQ+BfIlprCTwzLwHQK2tssMUVAV7oniUlDA3xkOhj5qVWZv9LM4Z8UxrvvassgkDeS7VxB7Wu65+ZAu/1eu8kItWsoY78Ps5ILTXA77+3nIdaXHETICKfx+O5Q5oAEe2wamzs/AQ3f9cVCN6JYW8iwHNQt5tZPuetGtJ84EGni52Hurlkcwtn3nOMD7/o4L6GsXgJdEqB13X9SatGeutHeffCyJ1oWr9fXc0ns7vY4/JZJfG4zOxvs0rAtq5+VvDhmrGsNECETI4PYOucBIio0Ar4S0Me3r1o9tk/8kot71lcYvwWOaO7atgsgXwZAmesEGjKuhBz1uvSOtndO8nVn3YYbd8+VGl2ObXLLKEpKwQOr3UEQM0WA/lvNhp9izc5jfbiTU4zHpiQIfCXWfDDp/8wyoi8l2ujEsi6v8LoL2Y9++FK41nHz/2yBC7LELhiBvxFxwjvW3FsRvGWuTwyIwt1900Z7/X8NmJ468B95bIErsjEAGTBtx3p5fTbQpnXtq6OVa/GtvXRd6Ozvw7MeL/mi7OB9h9fcMhOmCpDYEBmsPr0Tt6VEgJX+v6pAHjxrGrH6agECt5qihhn9NylQPKT9ECfzBKqlhlsetmItS/IhD8TARsOPC34mfOo3fTmQDMJ2GU88I3stpn7XE3EshC/pz2TnlrKHQX9XLixySAjyu44SGTIeGCDVQOu7slQAKcU8Zlf/t9dzhUNGATE8rI6vqZp6+ckIG7NzARyuIYH7/Ht7Ua7iI1pYiJ5ibOzhfE16YMNgDwrBMTpS4D8Yc2JiMA8uqXFICe2Xgvj5yqyoqrq0wCumTHgcauh7PpeZHbtqhoO241CWZnkgveaqqprpAkEvWA3Y2T8woQB0L6tPRKEBj646rjRpzlHvhoFUKaYFSJ6zMyFbX/j2IzCLVqfwVMu48iZvrSEB06Oy4AXGFaZJhD0wleyBH4vGzIIiNPYbP2aDoSq1pyVdp4aj12NAvhcsSri6puIGmQItNt6Q8VZfuzirPCdUF44sbMjVl9H3LfWRHQ3gJ65CIjbB7Esvr69NJAPYga8y8eHnqgKeit6LADoBrBcSYT4fL4HRR0yFwlRbYqTmYzHvBPqrEQBXPR6vQ8oiRRd11cAaJGNCasKwCm8riRDmHkxgCwAV5MA/CqAfeJvKyXZIi59E/kvDYBWAM8qN1qI6A0iqrPikeA7DgCvKzdbgkH+sciYRDQarQwJto0AOCru/RMepEn4z3ilpmnPCBXfRVtCjczLvMyLIuQ/nhYrBuCy80EAAAAASUVORK5CYII="></img> */}
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFK0lEQVR4nO1YfUyVVRh/lGTKMsuy1ZzNVptjrbZsszZAgohwSIVfuYjCLCJd+IGmAvecQMD4FgIUjA9FuOd9NfwqNTPcsCUzMUjZummiGSqgaBoqEDzt3Hku535wuffydd14tt8/73vO8/x+zznP+QIYsREbsQE3CsVjCbCvCLDrHBSUbP4N7hcjwPIpKGiCzXA/mAbUlwgoXaYCCLBuDZS/DM5sFOhoCkq1IK3MTkQWmCQJYSd4G3BWI6AuFmQTxpZha80svPFrACaM2y6PxofgjEah9CEK7JIgemT1SsQWDz0qo6LkqdREYdfD4GxGQMkUJDMmF2L7BW+DgI6L3pg5ZYs8lTLAmSwWtO4UlA5BsL4ozEBe4PTXYfIodMaC+jw4i1FQDgpyJV5pZuQFSjzT5Vo4DM5gFLRzBKk4Fy1eqXqrVwFNR4P0bUR7DajBw0p+BajjKLBzgtCB8HW9khf47qNoeSpdoLDXbdgEEGBUkEl+pATbdH59Crh9xheTJ26VppJKhoV8DGinUFD+FURqMsONiF48MNdoJy72yDD8+yU1Ql6RblPQTh1yAQTYDkFi8ws52N3kaSRg59x4IwENexYY/vG2BS9my//VISVPQfU1BB/F8Py++Ubkb572x3jXcgNBvvqYTqW/9s/T9+0RofUfIvJHHiCg1InAFe/EmZHju3Bv2ZfxzbyeUSLA6sMhf8ygCyCgLhNBkx4sxZun/I1I/dc4E1MfL7aafYFb9a9j0vhSWWzkoJJfCxWPUmBXRcCfaKQZqbq8xTZlX6AqZpncvnUdqJMGTQABZYsIlvV0PnY2zjQjVDA9y6bsyyOW/Uy+vCoVDAp5Cmy6fFH5QxtiRsZ06ewr+3gPurIQqRZ4DHXGANPHURSUKhGkPGCDRSLy0mlL9lHCdr9keRR+5jEHjD4F9r5wHj+mHK9WB5oRMF06bc0+3sO144G4XupPQA0dEPKrYfd4AkqjcHx4+SqLBOSlk9cBP7idUd/Fmo3h+n97QgiW+qRgzrRNuCN4vUUfhz77XJ6CV9aAOmEgsp8inKY/WYjt51+1WIjy0mkNfJRajs22KOBugw+mPVEk10NyP8mrz1Jgd4XD3/IXWQxsunRaw/dL11idSrU5Pb4IsPZYUKf1Q4CyXzgrnLERu5uNzzsCW73T9FNjm08q7lpIsXLVSjyR/gnqyt/DgxFrDYRSJxXjnT99rQrobvbEolcy5YI+5Gj23xROvhjNsPGHYLuKUoALF35OZn1sU59LlW9jnEvPOUkDLMhe8q4EFJ1w8O2iGIfI8ycVcWCzdGJFK9gbqpGn3lm7niYJqDGi85cTtmGb7jWHBBzVRPZ6Yu0LbTo//SVJEhFtE/loUCcTYLdEx+PJEQ6R59j0XK7eBz91OtL/WOJSuaDbKKhP2ZB9RSs65brnYddlL7sDV29Yos8495HoVob/1AU4JKDrshfmuefKBV1ulbwGmAd/hHV0N7V0oNsXFuvwCGKLB56rWGi0DGtA9bZIfj6oLhSUWtFw5xzLu6Ut4LuuHPTHFVH9EqEEJcib2yl+qTITQIEtEY34Y+z1k7McDijmLt+d+cbU2/6BNuJG7RuY6NbzQExA/dSEvDqRgNIiGlTFLO9XwIbdC/RL752z1jcttAMm19RWCmWPSYXLsgwXlakF2Pm3+UVluNFh8kDMOcsCrokfv5eGDjtZ7AX1xR/ItdBiUcD9AiILoKCkDTchajdYilzErgRYqlzIzgvWzMkPyRvSiI0YOL/9D4Fvdl2MQJUpAAAAAElFTkSuQmCC"></img> */}
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAklEQVR4nO1Yf0xVVRz/IDBKQcekrSJllrWcZRItnStb/tiatTXXJCUjV4tV/oHZHKXxnqTQSwikFj96Cg6U9yNNBXoY5z6Zq2w1LcMynLkom4pDMN69jz0qTjv3cR/3Xp48Hu9c4A++23d7737P+X4/n+853/M99wKTMimTwk1utOApyQ2X143rogCfKIAOqI89YzY2BhNNvM14USLokgTQkahI0NPbjNfGFKQkYLVEYPG6kaI8o6cwVRTw80iBB9FW5iOQCDdSWAwWizsBkeA7OXsC/pMENFxxxr8iEXRHAF5Wr4CujoMznpMIakSCf+TnBKe4gpeasVgdtOdYNN270ERLZ5XQE2+soje+iAsb+N9NsfT7nKX0k3t2UesDefJ/zZjjWMSPAIFV7fzosy9TMxwBtUzfQ11rM+iVuqSQwNkYNpbNMat8MJ+asQRWbgSoC3EiQaZEcOZi2d10e5RdE1xR9rxmcQ49t+tBKpIoDSA2z7lyI82Lrrvp3Asfz2XA2yQB2bR+sDa4ysXyOWLd45tp3hRbUCCKsq3x7eZlsrLfw43Nm2KjzOdvZXNEGCkiwdNKRjucibQ5cw21zNBuhXC0YFo1rV+9gV4+cFtgpQztEx6CY8MV40iBhyj+RsMIyN10IFDZ3A/kFeg8lKDZ51Vp24KCNsFBrQu2a+qj6+hUmUjF/flqAp2GEfAQ9CmBCmdWyMB2xO6Xi/P3ypQAiMp5+UMI1Cx6O2C/VH2nvHV2xtXItqKkcvXp4zOMgEjQrwRiR6Ee5Mk3V8i2XywLtLYoO23/dLZs+2bTiiHzXGvXqa8Z/YYR0DazGJkEWwlWyI3p6+UGp9it898LADzw2FuaJsjGsjmFMytkH8xXgIAAahiBgWvEiDrt2YKFgeyz2gijS/9rGAGJwBPOdYEV5/4lW8K7ZhB4DCMgCjgfDpjW/IfDzT4VBZwzjIDkhi2sbI5GCWq5AzejJcYEx0uujHWNRhNoTH+hwQx7JovJBfwaOKPNsDfKrT++ytjsC6DvJ1Qpp1c9i80h+ywbg2d215FphoG/fjhe3yPWcyDgENRO24rnycF8P4H2XfCr78xQMKOx/1o0X3/9+JLHCnSqnTZl+Lum9ziorw3Udx7U2zIU4Gjsruf13d1+jQcBr+YmObt4EMRJv95sS4RrL71rt24F7B7uK8A6q7r189KephjZN/cVMMH+lf7y9WdVMncCf+yZFewKfoLHChQPvXUu51K0kkq/zl4ZhID9w4gJ5MK2XO94X9o2LkUrqbQ6NTfIi5BzWcQEslAZa4bjqtrxzrhaKgrarw6RFLVIomSfuv1/mVs3NsNu0Wfn2mczuO3/DmdisNfQAvCSrTh0h/44bc1P5UagdUeavnh7t8KZDJ6iL+bDz7w6LKhQRavWz1dl6Yu3kCt4P4Ha6WbY/1KCsNfB4UCFKlq1FiWVq8Ff2oIjCdwJ+EnYlphg9ynBuhtuGZ5EiKKWBNDuhlvV2e/LhfMJGCkmOLOVgOzrQ6T7/2xBqnrvb8RYiBmOj1hA9hErUgJ7HzIp4EswlmKCI4cFbrf6v/eMRtsrU5Qz34LxEDOcG0qSd0ueUVzuelyxtPj2Uom9qo4L+EEStvtqHs35MRwSbOy+R945/S4O3ouJIrYns1/vsCd6Q4G/akv02pZuysJEFY8b6VIzfpAIekUB/UzZb4ngNLONN75JmRRo5X8w0VKQtMJPpAAAAABJRU5ErkJggg=="></img> */}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFBUlEQVR4nO1YfUwcRRR/FAi1hRJSTFRsSbUam2otYixptMR+JKaamMYUW6zYaCRq/4DWNGgrd8UWPAGhaOSj10JztOzeSb8Aj3qzZ9P4FU1RQ7XWaCNa05ZKoXI7R6jKmBnYY3fvynF3s8AfvOQldzsz7/1+b+bNe7sA0zIt08JNrp+CJ7AbnF43XJMlGJQlICM6SJ/RMToHppp4XfA8RtCLJSDjURlB/4ALXplQkFiCdRiBxeuGVOUZOQOzZAl+GC/wANpJbfgC4YZU6oP64k5ARvA1i54E/2EJWi874l/CCPoiAM/UK0Fvd3PiMxiBTUbwD3uO4AxX8NgFGWqn/SejyYGlJlI1r5Kcfm0tuf5xXMjA/26PJd8UrCAf3l1KrPcXsf+aOZ/CMn4EEFjVxk88/SIxg92nljn7iXNDNrnclBwUOJ1D59I1ZpUNalMzF4GVGwHihDgZQQ5G8P2F6rvIrihR41xR+tyWUUDOlT5AZBSlAUTXOdZsIUXRTTdd+8sHCynw81iCPNIymhtc5ULNArnpsW2kaIYQEIii9Gh8tW0lU/p7rLlFMwRCbf5avUAGI0VG8KQS0W5HEnHlrCeWRO1RCEVLZjeQlnWbyaXDt/p2ytA64UFwcqxkHC/wIMnfZhgBVk1HHFUvfJftQM+RBM05r0/fGRC0CezEumSXJj96T8xiRGrvK1YT6DGMgAfBDcVR2dxaBmx37CGWnL/VpfpA1C0q9iNgW/aGb/xiwx3s6OyJs7Gx8uQa9e0zaBgBGcGQ4ohehXqQX25dzcZ+tCzRjkWJpGvffDb2Rf5qv3XODRvVbcaQYQS0xSyGkaA7QRO5LWsTK3DKuHXx2z6Ahx99XVME6Vy6pmxuLbNBbfkISEAMIzDSRoyr0p4tWeqLPs2NEKr0v4YRwAg8obQLNDkPLd8eWpuBwGMYAVmCn0MB01n8UKjRJ7IE5wwjgN0ghBTNcBRBI3fgZjgVYwL7C87sjW1GE2jLeq7VDGIO9ckF/HpwRJtBbGOlP77e2OhLQN5JqFdurxbqm0P0aTRG7+ze47MNA3/tWLy+RmziQMAuqY2er1jEnAmZW33PhMx8PzDhjP9UvljffnzCYwd61Ebbs4erJu2BSpP2sYL0V3OiH8Bwxp3P6qu7eJUHAa+mk5xf4QPRUZjB9GZHItTxqjv36nZA9HDfAVpZ1aWfl/a3xzDb3HfABOJn+ubrj/oU7gR+3z8vUAt+mscOVPh3nau4JC1W6ed5awIQEN+LmEAhCKv0hg+m7+SStFilDWmFAV6EHCsjJpALdbFmsF9RG94T10hkSfvVIZKkllEUs6k7/5e4VWMziBZ9dK5+5B/FcLXbkRToNbQEeMkOOHK7/jrtLE7jRqBzd7o+eQd2gCMFeIo+mY899fKYoIIlrVqPrs3VJ28ZV/DDBBrnmEH8U3FCXwfHAhUsadVanlyjBn9xOxxP4E5gmISw3ATioOKsr3XmmMCCJTWWgPS13qKO/o1CcGSCkWICR57ikH59iPT8ny1JU5/9LTARYgb7+9Qh/YgVKYEDD5oU8JUwkWICewF13GUd/t4TjnbVpSp3vgUmQ8zg2FyZshd7wmju+p2xpOK2KkxfVScF/CgJ4V7bIwXfhUKCzj348Jsdb0HzPTBVRHg879VuMckbDPwVIckrrMjPhakqHjdkYRd8ixEMyBIMUaW/MYIOOjbZ+KZlWkAr/wM5EjpIRbpkPwAAAABJRU5ErkJggg=="></img>
            </div>
            <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
              {/* <p>~/</p> */}
              {`~${router.asPath}`}{' '}
              <Typewriter
                options={{
                  strings: [],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
