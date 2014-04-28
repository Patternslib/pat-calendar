BOWER 		?= node_modules/.bin/bower
JSHINT 		?= node_modules/.bin/jshint
PHANTOMJS	?= node_modules/.bin/phantomjs
SOURCES		= $(wildcard src/*.js)


########################################################################
## Install dependencies

stamp-npm: package.json
	npm install
	touch stamp-npm

stamp-bower: stamp-npm bower.json
	$(BOWER) install
	touch stamp-bower

clean::
	rm -f stamp-npm stamp-bower
	rm -rf node_modules src/bower_components

########################################################################
## Tests

jshint: stamp-npm
	$(JSHINT) --config jshintrc $(SOURCES)

check:: jshint
	$(PHANTOMJS) node_modules/phantom-jasmine/lib/run_jasmine_test.coffee tests/TestRunner.html

.PHONY: clean check jshint
