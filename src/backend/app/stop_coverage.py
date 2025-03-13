from test_coverage import coverage

cov = coverage.Coverage()
cov.stop()
cov.save()