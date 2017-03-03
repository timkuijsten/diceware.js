#include <stdio.h>
#include <string.h>

#define NROFDICE 4

static char *diceroll(int n);

int
main(void)
{
	char *cp, tmp[20];
	int i;

	i = 0;
	while (i >= 0 && (cp = fgets(tmp, sizeof tmp, stdin)) != NULL) {
		printf("%s %s", diceroll(i), tmp);
		i++;
	}

	return 0;
}

/* return a "dice" representation of n (base 6, with offset 1) */
static char *
diceroll(int n)
{
	static char ln[NROFDICE + 1];
	int i, j;
	char c;

	/* pad */
	memset(ln, 0, NROFDICE);
	ln[NROFDICE] = '\0';

	i = 0;
	do {
		ln[i] = n % 6;
		n = n / 6;
		i++;
	} while (n > 0 && i < NROFDICE);

	for (j = 0; j < NROFDICE / 2; j++) {
		c = ln[j];
		ln[j] = ln[NROFDICE - 1 - j] + '1';
		ln[NROFDICE - 1 - j] = c + '1';
	}

  return ln;
}
