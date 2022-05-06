import css from './Header.module.css'
import Nav from '../navbar/Nav.jsx'

function Header() {
    return (
        <div className="container">
            <div className={css.sticky}>
                <div className={css.block}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABPlBMVEX////+aQIkHiD/awAAAAD+YQD2vJslHiD+ZwAmHSD4dzP7XAD96uH8//8hHSAiHiAdHCAWGiEAFR8fGBsaEhXn5+f/bwcKAAAbGyAfGyAUCg6mo6QAGCAAFiH8YwAAFBwYHSD09PQPGSEOAAb/XAAkHx6nUBYNFyK6urrKycnY2Nj67+P0sIv3cRm2UxPeYAk0Ix59QRn0fDfAWw/1aApCKh2JRRU0LzFpOReYlZZLKhoLGx+EgoNgXV5XMRcsIh9RTk9sa2vMXRLzxau6Uw0/PDv1kFjyhUb3n3D31MX5+/D1gTX0lGP1287zpID0fCX0wKbaYQ2fSxZEJxsADyUzHyBvOhh/QBZQLBiQRhSNiYpgMhgnIRhULyNRMRo6Ixq/qpukRQBpLQCdjH7itZ9oPRnRbTfTUQB+MgMsAwCXEvokAAAZCElEQVR4nO1dCXvaSJo2koikEHRwCAESCDmAweGKBdgGm8M4djJJtsGz+CAT7+zO7Oz+/z+wVTpAgA6MhD3zLG/3k3Y7tlQvX9V3V9XBwR577LHHHnvssccee+yxxx577LHHHnvssccee/x/RvitB7DH9giHw8dXP7/cvN8en2++fLn9+e7q64dvYfC8f7b5cPypEsoEM4QXZDJBFR9DmT/dvvt6/NacTAgf32YyRMA/ALbBUKjy/dPX4/A/gSjD4XcBX/kZLAOZTEi5+fTj21sT/PYl5D+/OU8wc5XvV9/eUJTh40pmZ/x0gAUOSb6N7nkNghBEqPLzx1swDH/7/CoEIcdg5ubq4NVna/g2uLs1aEFS+XT8yhS/hl6Pn87x52sakPDB51eUoM4x86ocrz6ir81QleO71zKR4X97dRFqCFa+vo4Uf7yWHl0DEfryKirnU/CtGAIvIPBu5xTDBzdvNEk1hD7vPPr4pmzHEA2gKPzTK4jMHztWqh9eQhCFgMMKcLVhtTqscWjA6xQgMt93qlTDXzdfhihXGxWqwwqHosPLvCDIInNZ5TwSDECl+mGHUgxfbcyQGz2LYrEoZGfDywifpGgAPvu75sdMvdohw3ebMuRaWYZCEJxE2I4E/oNT8H8Rvjf2zBAonE+7k+LGDE+yFGSEIHSeygOGbHMmSTiCML8q3rUxEfy+M4obMFT1C3cp5VWCrJCXRBbhp1ygcinDbzxwPhic4M3bMawUps3mrFXXJMg2Khw3vu+IJ8BeKD0SR0ix6odjG/y8IwfHjSFaoGVJYnhJJYhTPWAe0AA35FvQHE5YBCGpuzHqA0fi/W4oujBECyKjrT6KYRiSJOuaeUDHv2rgT4WGfyfJ5yc+WI3MbvwbF4aKzOBQdix/d3l53pPkP490cSlAlErtTgJ/m6cYcar4YDU+f9uBFJ0ZoiNRFaD0CNwXlAMm/743VP8iUKveNztCPoloImafx94pBm924N64MKxCbUnJBX30QKkq6uysziSBZWhcUz/wZ3jcB8MY/OK/EDeSYVZZ+iY3qcs8FQV/EcMwEscw+CWSzPsgxczPV2UI7YEEdUm2Nv8eQQSG/y5QUSx2jUQTgxJ8Rqmfgj/F532QYsj3iNGeIXC0h4VH1Qyy04Wq5FoROplon8XTWLtkPGWQAj9FJn9VPDMkMl9fiSGqFB7yEZmlEGAikuJpDdUcF2Um0FHsLHdw0Kbji8fQmjtwrlg/7SVQfDaLNgy5aq/IUBTO8J2OnH9uNn89quGuMutQMboMfrGElU2POTtUKcozH5bi59dgyE3/zADhJdn8tDpWOIgAFCJ3LyCx65z6m9qfZ4lYF3xVxlStShcbnhkCbeNr1G/N8F4AsxNn8xOFMxwySBCtimS0bZqcB7mLRPQwD6R5lKBV2y8+evZufF6KVgyBjQBxBMk+1FZGW6FJZGlyAqQTSJQBpI8wXJ2o4sQ7xfd+Gn5LGc541b5VVhYV+igjibPVJ1xEwcQ9gBS1iepAkdAiMdQt2gre+jhNrRgqHVqNk1a/X6HpaHvtCWcJBMGOVIqqEPFOa+X3tASWotSGo2phMplUhzXFORoJ/dgxw6yan5ityAItyBoVE3JHuUEM+Db9A5WiajQoYVZTU40aOMCs+ji9fKaFSESGKEbY5rSqOMxm4r1/tWIrhlyTwnEckQuckT7Uvv3AR9u5ld+/RmKQVTRuokjzUmNYGw+ByACzJohIZJnlGZpCYCIEx0maZngxP3Xw8oLv/CJorWmAyiRJhCr+ahWq1clQGwha61Cp7urvlzVSh5r+0ScqQnUEEUAQZD7JUDRiAk5qGgnJS+Ll0I4jEfAtVrTUNNyjyEJXJskKYqel+yloQaCx0toDzlSKOsODoxhuYkPRNI4vqIEPjWF4nuVpLWGA8MK9XViZud0pw0Bg2KiDASFU5L5m5JnQRgcxO2oGuiC0iOLa1/HcUwqxBMWC5ZfN3z2cTqeX9WyEVwWblJ9txEiEPuyWIarMkiQp9YYmnXeXjF5bPeKonUjpsn3CsFQ0ahJjNBqNxYB3JNfvq8NxRdc+XKU667Dq7E0WqzZC9CtUtGaIjjpgmspTs1JXGDx2Yf2QhWTjR4N+O3qIQSRiSLt93b/o4pT8CCscCzMIDON4KjOAIomLBWsp+mUxrBkWoNcWaXHmd1eydGywySNz8bKGeDwOVW83JluQQLmTuqy5CNYUgRB9kaKlLj2RaYQW7pcMFjqOIAtVWj46KlmsSSucYcKjpReD1s4ldUJHTqwYEhl/uossGKIVnlk3+GaG5Wt1Gl6XnZ+t4giTHuxsO/egSpFa8w9V+OS7WTFsFUkkmTRSEqhqLYgAYKjP0jIWpaPX6dLRBlLMRZNCbe0VBpQHNUsinVoKUfHFJq4zRLlfSfDSqfG/J1O1KErUsoiuafoxhI6uOjc26KbkR3vXBa3lVdMojCyF6EtFykKGNeh4dya6JzMSptpXSpbWrEUcTixqs8eDyLjnlNkAjyfB25imFUNC2Q1DdCxDhkDPwOxoI2vIQKlTmvsZB0aOTqQ3evyFpR41gZuyMIllLcSPfoTCVjKEDCm6CsKdAlDoRV2agZmkhxbtdj8WxTdRpWWMcRQhnKcynKdJS23ki9W3YMj9ghEAI9ebdDFJIoYQYPyrqZpuP5ePagGTC7optuWSm0JbUJ+SHatAA/jf3ila6dKCqLmSFE7C/JmxIocRBElAyeWeDkoYleq7KptcChHc6vxoLQkUG2m8ZRnBq50wBGtD1AIeNTAoGrpQ6dHI3KsBoWCq7WYPjxLWs29JTlxDAm/iL61+kPBhmlp6bUoLBHYg0FE1OXuvM+QueQSZx09HWDSaenIW40WsWHAhCOcGCz7PvOV6JTjvJtHG8649Xp6fN57h/OGnRj7xnp1H8wDlaAo5RM6cOGJ01t7aLz5PWDmgI5ZFj6D3PhRrhgRs6kK5KQ+rEZcGwxHUCbF5IiM3AJHhIXZxZEeyhAE7Zw3zy9TXIB1LafsQCDvWnlQ1x5/rKwStqS5W7HpuJ47aGIXEEli/my7H13jG+zG6Pq7VhlqK7fGx1bpvtR4nhdGwppjCFrQKvESEtXR9iIrn1KkjwwlkSNXnK+QO1vTpGD3PZeTS0USURqKpBJZq9y8Gg2736emp2x0MLvrXIPQFQTwrRIpZuQP+YVlWgkmpYjbL1y8fF8H1WIQMp5ZKN+Q5wHBkeBKBGSPaWEvaQgRLEevOBZZLt0FYr4XzsVgspQF8FVW/idCaVoYpEdMXNJmUhWZBFyQXIWEsYzmGoOd6oiNDbVp25lHGiaCPM5VKLyZlqQtJLiXU1jBPSOlf4LC7Q3zQPjuuziB48rflGDJfPBJ0rnJrWk6YB6haMlz1BrB2euG25Urda5i0eCn4nurJoL95oNCalkMglJ0y5M7hwmPn7gY6SxqzDYkm6IE5txhPD6IwD4Xb0YGJ0vlk1UAne1CK6CmY/TYMAyGvFtGRIXrKQ3ejMdcBo6J5iCmM7i4lUONH3esYFotuyhAYW+jzqAwpG4YfvVpEZ4aPLAlWyOWcYSW/stxSWGqQXjIU8aNBG1uZsFQS6lEZ6FNZljqStJgJMA1FoKcMmKXn1mMIftolQyAzHMEX5oIIqMZ5GcAeXg/SZRPLXGmAHdKmz4I+nzagKVTRapw+0BFW68TJU/iQq1BJ8Dla61LvqsaZ4bgIxkl35vEBeiJaTcBo7DBB959MeZv4GZYwyfAvgWWPRjlpiElt6tL8eY+C1sLaHgaI9x7NhTNDTmLA6hEWmXegXSkrjpBmCsMOF8LMncXmCX6qaAr0YWIYeIS137JKEaEYaEJwtmEThaAeY0QXhndJchEDQ+hG3w5gysYuzjSW8YFeiQKLrL46fEBzan4Ubu21AWQ85r5dur7UUZjj9LFoa9oNRRk7xK41HXuEGWpVtCjAVJ5N0wEX7PI5QY/JGheGkyJ4O7NQpgGuucyQZlhY1uUZijaZAjBjkSewKsttXatK07W0NxqoCqYHiUObMXgtlrp37uFksmf6TkE2S42VzxuTQgEWsdkim1y2loP4QbytSZGyagjjzEKU7CLJoMdmPheGtSxgSGVN7fgVeSFEkj0fcka1flxtNCMyZbLqscTZQVlbi3TkxKI4UxVpHLqoQN0IthkrryGiS49wRetNNCXC0Kk0Z8hemiQDs6vjx2a2yM4/AhzrGyXTeS7EBCLwKLLAUtBJVmzZJh0JjwbRrZMdTqR8xNSNjw47BgEqvzKzUNjQWJhRRaN2T8faA20lMpZNfeh42qOl/PO9Q98m8XmnDFG1eWgp1ac0k4YILeQCG/lrhb/IvC7IqK5qaMk6rQg+klqNc+qu8doh5cZQtX9LVGBmWFuFsl0rBYoOT4Ffljcr3Yhl3l77TBzhNZHhxlBNZCwlMwktLoaBgVMibXyaXfJhOw4lKGeGHotsbgyrch5GNubRaVEj3PHkuDsTHT6ICynSNlmKDRh6bK1xYziMwDJNb8np0k0i03POZ3NoobfQq8lf28qQ2C3DMexxo/NmLmgtoo3ZhSFA7XJuPenslk3gu5ZhDfqhtLSk6rmm1mfZc920hnKTjqF5s1vuxSQyO2YI5xktL41O16a0tIFU0GFdDyHELfcq7JhhoAY3ra0yHEZUz0zeZAsJWptpDrZg51q7Mdz1LJU1hkvvVHrq1JPdC0sQ3KO6/03coEjzJgyhj0azy2sIhSU/4Hdb+TRWDxk3BV6SttyLsWN7GBhmybVZCqwk1KYkY1nVtKLIVWeXo+0IAoY79WkCoyK1lIvSRjxW7ZypZuMGlOO2NIfAa9uwdWc7hsBrI9esBfC+76C9WCXuNMzA1ocv7Dq2gFnvFYsPvz3lYfZesAhrfQfhcZe32y5ZNbFLPa+17Rfzq1HVrpD5vkuGegaYP11lMuyou/YafmzidkHGY4uiI0OC+wujmoW1yEdRCxjJcx/Ob3GD1/69d0H7MRJoFWpSBF/PdmquKUl738GNuilZr11D//FXhx0647x61gddXLMKmgYiN2kmcaSHKoWZ7aYLnaHHjHAak+4aI3jmDBow95oH1FMFoHOGk9J60USL/W1aCl/AcNiUZefQmMh4PL0mfUhSvJB9blTHiqnVBaYGJ6K28YOMrPvMqJqvJl1aK13A1S7FJEk6dy8Cl8YrQxwncZqSitn65WN1WKspEONRq65Hdvnkg8WLx5Ah7tp56AC0di/weRxHnKc64XXTbPrQ2IpEU6zcycp0r17v0bIg0XpFPlm0WChoRY3zmb9vyRBFK628rCX1I45BGOHRHKoMzaARCsKUuZfvrfxrTtZcga0YgiXQSspG0SLrqGo872JbZbgKWn6wXCaoulGfkl6+JRYs8Vqj01mk4bKOMvzodetMGoOrbbVHYg5KmFmbPFTLfEdeyhCIbzTryOYSnXMCJ+QtsgD28D+ZrMBSiFXdE6f4yKONokMvgbeD57MvMPmomsOfNDsSZf5A1wKXJRAVjwTD7zIcLIvlO0V2ZSskzUjyg+0SUUtQJNIpqPvRNiIIT3w5F+VFzRBXaxrMndNveW+/hH4prP4NC43LOh+RZYnlJZ5lZYG9azmcjoQ2WFj3o2X59+NQcSytaL0JynjyWxYYZEEwFnuKAmPENhwVjedOb8PzRgl4ZNCwOmk1pqen0/vHkfN+a6NPEYhaFvCHe3j0wlpvbEDb7gyPEDl9Fuf1KBVR7CKuqjnZ6SAt1HPT10psoY7Hqo/XnqGKJFtke3en0GOocPMHcJxSG48m02aPZXmKXubXLh3kYAWcoZyWYcZjgL/GcHMsMyRJkk5KjCwLYpbvNc8fLi9/PzTrTDYiwp54ilxW1lHsGm5NUc984adO6thzz9fWDAnUtrEG+AuMiqRNc1EM66tbb9IYdKec08peAwsvDKfOrUN2oFOY3rRZgm1hOHvqJEIf2ry3n6Wz9R4+V0RTWP5Mb37TmjRooeaUgyN82GS5NUO9TBpNOnJaptde9NxqZxPQIPxynqRvyFA7RzHaz2OH7u3PsJn/+qm0cMDOtH4w5tI5h+HVofHCkNOK+Vg5V1bbnxMp69bgaDR1iGHt7tHyuT16T5/saO09t0N5YqjXgfXzeHKlo6eL6zwUFZY41HYkHCYAbbLd76ZLK85zet707rSDFsCXcxW2ZIiO1UQqhS0NPl4ulY7SZ2dPAGfpo1KpbLENs9TH5hJ2TpoTf9rRPuCNGOp9hdhL31caYDHEaK2l8o6hSciX44W3ZdhSu9uo2Av59cEETWFnbY2hcweK17KaR4YPvKZKX/Cq+BmJxYDiGcTLWg94vuN4eq0PHpsHhkpPNRbrJ/LYoZzuYyngkJJdoJv0bj7aeZL6dAgPYAjDCNdYYgVjbX9Q6r++qZeZOb8DbjRJJGLRQ6yvbpcq6bkhwVGT+nUGz9/+MRyONAyHGydd0ImgBgvCKPP+9sohV5QrpQftQywVSyVSfX2nVO46augZh1cQ3iNDDWksUizCfyOCuHlaidO8UjpbI4hgMJR5//3TH1+Pj3NhVaKGUEt9HMOww8NDjO6bTP5AU6V2p7bon6FvZ7alD0kSV3PCeWmtSmgLfRnqhXxUvVAulAlUbr58v/356d2VFvN04QEo7Qu4wdT0xq5+rJv17u25CDN+HYGp5UthvlsUN67oGhsR2aXPRLs6D16eF3qvPhueYZNbTQYOND3qGhj6o0hVhpTUKTLPs8lo40oZagSHdlVue3+y3DasvVh1OlzQawOGmSHWnE5OatyLdKmi55TsxGAXmeee5ltM5IZjVJHx4TAFHX+ruaQCraA3mFLP1sqQyFg6I/EzXDcTJFn8u6NWI278OxpyG4uvd18idpuxLHsLSt3YoSFAsjhVHPtrfDusbTuG6hEgUIRFm8hg7RyyXOkpj813spFJ8d65M9Wfw4U8MJxpe0qYXzaT1FzTjJdB5BjFUvBgOu1zofm8o5KBSdKdn9DqjDGj6RmL8r6K0B/qk4/ST4OL614Cg9Ewhg26GkWcOXdrS/XpGLOtGar7klV9b122yWgZwCP12D0Q8x9G24N06eCgrx9B4FzyDfh6sudWDNGhQOma1FrP6KcgDPoXF4PuU7qkbyp9MlIzliVl8yfk89n6L2bInSd1PWPtVtoU/NKYvhMq79IcTrzSieW2QKtajzdC49ZD/Whpq9O6BE0HNNgQ9HcRbsGwIunFCJs0meXm8pyxI5gUWm5z9I/XuznAEsAjNWabpRtr2ZRdvjZ2rstufdO+ZEi9MESrRo+BtQiJ0PoczXWN9CiV7LmU/Xdx7dPLGNZ4rVoBortWBV1vvQz+XB2heVs++8ulazrjozu6HUPlmdEbpXCSFRpDZZkjEVgdYbmLzZ1Rin92I/gGN+ksg2vIyOIkHUoSmlqTgjHuzOeloE5Nr81rvzjbdAlA3+Y2pCWCk+JKUZdhO/VpwehRMI+wfNS9TiVMtRpafHBZg5m3udHKBLQqrLUV4STFy0Xh+fSxMBr+dzleLsO6xeAa1qKWSlFStuXSC7wjCb6AIToSdC2DkDJF47TGEJ6qQ9GSLAhCFtOOgD6MRZPmk4ZwipJ/uTQCw6uednR73qYMueG8qk13Jk2RXZanbWMc/HkQD7o1h2W+7Oyqzg0ZokNqXs4WJxw3nGVlhjY1cNkypHjx99jtutKQnxdaLGPTOyxHHWOK6nVbTpmcS3LS+QwzeIUAOxu67kff6X2yf2zCECgZQ1w0a/Sbotz48Tffkag1lsbtBzQrPLdWb3JZR0bx8b6ONYQ3uTqemywkyPQWVg0en1BtPGcFebmniyRpimFlsd4autxFEoAXdN7s9u7qDa7l5hpFY/g4s3oaLrCDldHktJmXZVHoqFeQiMWORJ43qrVNcrCZXV6yquLY7U5nVGnK845lhlnX+ur1OLBHbziCl8hMCtWTcQ227xEbpGGD73c5Q1WEb1yEeFJfND/RvP0OEvvzSe1BZH7u9D5nDY53q6NcS07ObQITcbPbL0Oo4nc8b4kPTjIcN02eGi/5SjCj7HoF6gh/tluIqDLpLM4TQqS6Dzc4Lvhlbnd+b7zB0O5mbm54njWZgM6dx31qZhChLz92fGm8meJni3lKBJTGwgjC4Gfmw9WG+rMzoZuda9Al/MiszVOUm0isqa8SXhTjG7/M9x8HrydAiPCaOuVGTfNBpXm27tembSKo3PpYOduUYfiLiSKw3sOHTpKcR3j5JLxHzQ92RDD0+Y/X0i+2FFHl5EFkzM40z062Pg/BzC8TrPx8FftnjduPAXVXiTL6LZoUDEIxsmsxbAN2RDDz/vYr7J96K4Lh8FUgGEArIHhfDobYvOcrKcHczNx8+pFzbQ7bNY6//+N/8sXlkJaJeFqBBAH7iP706atvnSOeEA7Hz9owi7S4alu+27zTzSCl9g0BZsEgbJG6vfrxCq71S1A+G1znE1rODPvfv4Y+hl4I4Dwolc83328/Xf14E625AXJxA8fHH44/vBTHsH8PLrg3XnR77LHHHnvssccee+yxxx577LHHHnvssccee+zxL4b/AzRcFu2M/+0YAAAAAElFTkSuQmCC"
                        alt="failed" className={css.logo}></img>
                    <h2 className={css.logo_text}>DODO PIZZA</h2>
                    <h4 className={css.delivery}>Доставка пиццы Бишкек</h4>
                    <h4 className={css.delivery}>0 (551) 550-550</h4>
                    <div className={css.buttons}>
                        <span className={css.coins}>Додокоины</span>
                        <button className={css.login_btn}>Войти</button>
                    </div>
                </div>
                {/* <Nav /> */}

            </div>
        </div>
    );
}

export default Header;