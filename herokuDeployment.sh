USAGE
  $ @heroku-cli/plugin-run logs [OPTIONS]

OPTIONS
  -a, --app=app        (required) [default: heroku-run-test-app] app to run command against
  -d, --dyno=dyno      dyno to limit filter by
  -n, --num=num        number of lines to display
  -r, --remote=remote  git remote of app to use
  -s, --source=source  log source to limit filter by
  -t, --tail           continually stream logs
  --force-colors       force use of colors (even on non-tty output)

DESCRIPTION
  Example:

       $ heroku logs
       2012-01-01T12:00:00+00:00 heroku[api]: Config add EXAMPLE by email@example.com
       2012-01-01T12:00:01+00:00 heroku[api]: Release v1 created by email@example.com
run
run a one-off process inside a heroku dyno

USAGE
  $ @heroku-cli/plugin-run run [OPTIONS]

OPTIONS
  -a, --app=app        (required) [default: heroku-run-test-app] app to run command against
  -e, --env=env        environment variables to set (use ';' to split multiple vars)
  -r, --remote=remote  git remote of app to use
  -s, --size=size      dyno size
  -x, --exit-code      passthrough the exit code of the remote command
  --no-tty             force the command to not run in a tty
  --type=type          process type

DESCRIPTION
  Examples:

       $ heroku run bash
       Running bash on app.... up, run.1
       ~ $

       $ heroku run -s hobby -- myscript.sh -a arg1 -s arg2
       Running myscript.sh -a arg1 -s arg2 on app.... up, run.1
 
