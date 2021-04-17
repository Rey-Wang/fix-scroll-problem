	#!/bin/bash

PROJECT_NAME=$1
SOURCE=$2
ROOT_PATH=$3
EXCLUSIONS=$4
SONAR_DIR="sonar-scanner-4.1.0.1829-linux"
HOST_URL="http://sonar.tools.aws.nexttrucking.com:9000"


SONAR_EXCLUSIONS="**/node_modules/**,**/__mocks__/**,**/*.spec.ts,**/*.spec.tsx"
if [[ $EXCLUSIONS != "" ]]; then
	SONAR_EXCLUSIONS=${SONAR_EXCLUSIONS},${EXCLUSIONS}
fi

echo "Will ignore file matched the pattern ${SONAR_EXCLUSIONS}"

${SONAR_DIR}/bin/sonar-scanner -X -Dsonar.host.url=${HOST_URL}  \
-Dsonar.login=${SONAR_TOKEN} \
-Dsonar.projectKey=${PROJECT_NAME} \
-Dsonar.projectBaseDir=${SOURCE} \
-Dsonar.sourceEncoding=UTF-8 \
-Dsonar.sources=. \
-Dsonar.tests=. \
-Dsonar.test.inclusions=**/*.spec.ts,**/*.spec.tsx\
-Dsonar.testExecutionReportPaths=${ROOT_PATH}/test-report.xml \
-Dsonar.javascript.lcov.reportPaths=${ROOT_PATH}/coverage/lcov.info \
-Dsonar.exclusions=${SONAR_EXCLUSIONS} \
