Personal Resume
---------

Forked template from WebPraktikos/universal-resume

**How to print or save as PDF?**  
In Chrome, Right-click → Print. In Firefox, File → Print. More info [here](#printing).

**Does it support A4 and Letter paper sizes?**  
Yes. Replace every `-letter` with `-a4`, and uncomment specified code blocks. More info [here](#a4-size-variant).

How to run it
---------

Navigate to the base directory:

```
cd resume
```

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run serve
```

Only generate CSS that is used on the page, which results in a much smaller file size:

```
npm run build
```

Printing
---------

### Chrome

Right-click → Print.  
Also, choose the **Save as PDF** option if needed.

By expanding **More Settings**, change **Page Size** to A4 or Letter.

### Firefox

File → Print.

Choose A4 or Letter size by navigating to **Properties → Advanced → Paper Size**.

### Adobe Acrobat Reader

File → Print.

By clicking on the **Page Setup** button, you are taken to the window with A4 and Letter options.

License
---------

NonCommercial-ShareAlike 1.0 Generic (CC NC-SA 1.0)  
https://creativecommons.org/licenses/nc-sa/1.0/

### You are free to:

Share — copy and redistribute the material in any medium or format  

Adapt — remix, transform, and build upon the material

### Under the following terms:

NonCommercial — You may not use the material for commercial purposes.

ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
