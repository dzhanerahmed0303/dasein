const profilePhoto = new Proxy({"src":"/_astro/Dzhaner.BFOzpDiK.png","width":1440,"height":1080,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/assets/Dzhaner.png";
							}
							
							return target[name];
						}
					});

export { profilePhoto as p };
