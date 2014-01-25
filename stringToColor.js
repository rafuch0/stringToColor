function colorCode(str)
{
	var r = 128;
	var g = 64;
	var b = 32;

	var front;
	var back;

	if(str)
	{
		for(var i = 0, maxi = str.length; i < maxi; i++)
		{
			front = str.charCodeAt(i);
			back = str.charCodeAt(str.length - 1 - i);
			r = r + (Math.pow(front % 16, 2) + back) * (i * 4) - Math.pow((back + i) % 16, 2);
			g = g + (Math.pow(front % 16, 2) + back) * (i * 3) - Math.pow((back + i) % 16, 2);
			b = b + (Math.pow(front % 16, 2) + back) * (i * 2) - Math.pow((back + i) % 16, 2);
		}
	}

	r = (r >= 0) ? r : -1*r;
	g = (g >= 0) ? g : -1*g;
	b = (b >= 0) ? b : -1*b;

	r = (r + g + 32) % 256;
	g = (g + b + 64) % 256;
	b = (b + r + 128) % 256;

	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);

	if(r.length === 1) r = '0'+r;
	if(g.length === 1) g = '0'+g;
	if(b.length === 1) b = '0'+b;

	return ''+r+g+b;
}

function colorCodeInverse(color)
{
        var colorInverse;
        var r;
        var g;
        var b;

        colorInverse = parseInt(color, 16);
        r = 255 - ((colorInverse & 0xff0000) >> 16);
        g = 255 - ((colorInverse & 0x00ff00) >> 8);
        b = 255 - (colorInverse & 0x0000ff);

        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if(r.length === 1) r = '0'+r;
        if(g.length === 1) g = '0'+g;
        if(b.length === 1) b = '0'+b;

        return ''+r+g+b;
}

